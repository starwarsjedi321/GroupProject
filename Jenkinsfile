pipeline {
    agent any
    stages {
        stage ('Build') {
            steps {
                bat 'npx json-server src/database/Properties.json'
                bat 'npm start'
            }
        }
        
    }
}
