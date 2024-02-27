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
                    parallel(
                         a:  {
                        bat 'npx json-server src/database/properties.json'
                    },
                    )
                }
            }

            stage('deploy') {
                steps {
                    bat 'npm run start'
                }
            }
        }
}
