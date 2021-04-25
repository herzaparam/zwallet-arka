import React, { useState, Component, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import OtpInput from 'react-otp-input'
import styles from './Modal.module.css'
import axios from 'axios'
import axiosApiInstance from '../../../../helpers/axios'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

const focusStyle = {
  outlineColor: '#6379F4',
};
const containerStyle = {
  justifyContent: 'space-evenly',
  margin: '3em 0'
};
const inputStyle = {
  width: '40px',
  height: '50px',
  borderRadius: '10px',
  boxShadow: '0px 10px 75px rgba(147, 147, 147, 0.1)',
  border: '1px solid rgba(169, 169, 169, 0.6)',
  fontSize: '28px'
};
const errorStyle = {
  border: '1px solid red'
}
const customStyles = {
  content: {
    width: '35%',
    height: '55%',
    borderRadius: '24px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('body')

export default function Modals({ openModal }) {
  const api = process.env.URL_API_V1;
  const router = useRouter();
  const idReceiver = router.query.id;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [otp, setOtp] = useState("")
  const [hasErrored, setHasErrored] = useState(false)
  const [userReceiver, setUserReceiver] = useState([])
  const [userSender, setUserSender] = useState([])
  const [transfer, setTransfer] = useState({
    amount: 0,
    date: null,
    note: ""
  })

  useEffect(()=>{
    setTransfer({
      amount: localStorage.getItem("amount"),
      date: localStorage.getItem("date"),
      note: localStorage.getItem("note")
  })
  },[])

  const handleChange = otp => setOtp(otp);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    if (localStorage.getItem('token')) {
      axiosApiInstance.get(`${api}users/find-one`)
        .then((res) => {
          const data = res.data.data[0]
          setUserSender(data)
        })
        .catch((err) => {
          alert('something went wrong with id sender token')
        })
    };
    axios.get(`${api}users/find-byid/${idReceiver}`)
      .then((result) => {
        setUserReceiver(result.data.data[0])
      })
      .catch((err) => {
        alert('something went wrong with id receiever')
      });
  }
  function closeModal() {
    setIsOpen(false);
    setHasErrored(false)
  }
  const submitTransfer = (e) => {
    e.preventDefault();
    if (otp == userSender.pin) {
      axios.put(`${api}transaction/transfer?idReceiver=${idReceiver}&idSender=${userSender.id}&amount=${transfer.amount}`,)
        .then((res) => {
          axios.post(`${api}transaction/history?idReceiver=${idReceiver}&idSender=${userSender.id}&amount=${transfer.amount}`)
            .then((result) => {
              const transferResult = result.data.message
              Swal.fire(
                'congratulation!',
                `transfer succesfull`,
                'success'
              );
              localStorage.removeItem('amount');
              localStorage.removeItem('date');
              localStorage.removeItem('note');
              router.push("/home");
            })
            .catch((err) => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
              })
            })
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        })
    } else {
      setHasErrored(true)
      //   Swal.fire({
      //     icon: 'error',
      //     title: 'Oops...',
      //     text: 'please input right PIN!'
      // })
    }

  }
  return (
    <div>
      <button className={styles.blue} onClick={openModal}>Continue</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles["group-head"]}>
          <h2 className={styles["trans-confirm-title"]}>Enter PIN to transfer</h2>
          <button onClick={closeModal}>X</button>
        </div>
        <div className={styles["trans-confirm-desc"]}>Enter your 6 digits PIN for confirmation to continue transferring money. </div>
        <form>
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={<span>{'\xa0'}</span>}
            isInputNum={true}
            isInputSecure={true}
            focusStyle={focusStyle}
            containerStyle={containerStyle}
            inputStyle={inputStyle}
            hasErrored={hasErrored}
            errorStyle={errorStyle}
          />
          {hasErrored == true ? <p className={styles["not-valid"]}>input is not valid!</p> : ''}
          <button className={[styles["ml"], styles["blue"]].join(' ')} onClick={submitTransfer}>Continue</button>
        </form>
      </Modal>
    </div>
  )
}