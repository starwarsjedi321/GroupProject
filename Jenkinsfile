pipeline {
    agent any 
        stages {
            stage('build') {
                steps {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }

            stage('run-parallel-server') {
                steps {
                    a:  {
                        bat 'npx json-server properties.json'
                    }
                }
            }

            stage('deploy') {
                steps {
                    bat 'npm run start'
                }
            }
        }
}