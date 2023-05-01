/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// components/Popup.js
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Popup.module.css';

function Popup({ title, text, onClose }) {
  const popupRef = useRef();

  const handleClickOutside = (e) => {
    if (!popupRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleClickOutside}>
      <div className={styles.popup} ref={popupRef}>
        <button type="button" className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
