# Algorithm Visualizer  

## Introduction  
**Algorithm Visualizer** is a desktop application designed to help users learn and understand algorithms through interactive visualizations. It focuses on sorting and searching algorithms, offering users a step-by-step representation of how these algorithms work in real-time. This application is a great tool for students, educators, and enthusiasts looking to explore algorithmic concepts in a more engaging and intuitive way.  

## Features  
- User authentication with Firebase.  
- Real-time visualization of sorting algorithms:  
  - Bubble Sort  
  - Selection Sort  
  - Insertion Sort  
  - Merge Sort  
  - Quick Sort  
- Visualization of searching algorithms:  
  - Linear Search  
  - Binary Search  
- Customizable parameters such as dataset size and animation speed.  
- Dynamic visual cues, including color coding, to enhance learning.  

## How It Works  
1. **User Login**:  
   Users start by logging into the application using Firebase authentication, which allows them to access saved settings or start fresh.  
2. **Algorithm Selection**:  
   After logging in, users select the desired algorithm to visualize.  
3. **Parameter Configuration**:  
   Users can adjust parameters like dataset size and animation speed for a personalized experience.  
4. **Visualization**:  
   The application visualizes the selected algorithm's steps in real-time, providing dynamic updates and visual cues for better understanding.  

## Technical Architecture  
- **Frontend**: Built using Python with Tkinter for the user interface and visualization canvas.  
- **Backend**: Implements algorithm logic in Python to ensure accurate and efficient visualizations.  
- **Database**: Firebase is used for user authentication and storing preferences.  

## System Requirements  
- Python 3.8 or higher.  
- Firebase account for authentication.  
- Required Python libraries:  
  - `tkinter`  
  - `firebase-admin`  
  - `matplotlib` (optional, for additional visual enhancements).  

## Installation  
1. Clone the repository:  
   ```bash  
   git clone <repository-link>  
   cd AlgorithmVisualizer  

