// ReviewModal.js

import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './styles';

const ReviewModal = ({ visible, handleReviewModal }) => {
  const [reviewText, setReviewText] = useState('');

  const handleInputChange = (text) => {
    setReviewText(text);
  };

  const handleReviewSubmit = () => {
    // onSubmit(reviewText);
    setReviewText(''); // Clear the input field after submission
   handleReviewModal(false)
  };

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Give a Review</Text>
          <TextInput
            style={styles.input}
            placeholder="Write your review..."
            value={reviewText}
            onChangeText={handleInputChange}
            multiline={true}
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={()=>handleReviewModal(false)} color="red" />
            <Button title="Submit" onPress={handleReviewSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};



export default ReviewModal;
