import React from 'react'

function Form2() {
  return (
    <div>
         <label for="feedback">Feedback:</label>
  <textarea id="feedback" name="feedback" rows="4" cols="50"></textarea>
  <label for="rating">Rating:</label>
  <select id="rating" name="rating" required>
    <option value="">Select...</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
  <label for="subscribe">Subscribe to our newsletter:</label>
  <input type="checkbox" id="subscribe" name="subscribe" />
    </div>
  )
}

export default Form2