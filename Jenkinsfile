pipeline {
    agent any

    stages {
        stage('BUILD') {

            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh ```
                    ls -la
                    node --verison
                    npm --verison
                    npm ci
                    npm run build
                    ls -la
                ```
            }
        }
    }
}