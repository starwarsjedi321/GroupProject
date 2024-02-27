pipeline {
    agent any
        stages {
            stage('build') {
                steps {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }

            stage('deploy') {
                parallel {
                stage('deploy json server') {
                    steps {
                        bat 'npx json-server src/database/Properties.json --port 8000'
                    }
                }

                stage('deploy app') {
                    steps {
                        bat 'npm run start'
                    }
                }
                }
            }
        }
}
