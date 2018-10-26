pipeline {
    agent any

    stages {
        stage('ENVs') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
