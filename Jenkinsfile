pipeline {
    agent any
    stages {
        stage ('Build') {
            steps {
                bat 'npm start'
            }
        }
        stage ('Deploy') {
            steps {
                bat 'npx json-server src/database/Properties.json'
            }
        }
    }
}
