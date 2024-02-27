pipeline {
    agent any
    stages {
        stage ('Build') {
            steps {
                bat 'npm install'
                bat 'npm run start'
            }
        }
        stage ('Deploy') {
            steps {
                bat 'npx json-server src/database/Properties.json'
            }
        }
    }
}
