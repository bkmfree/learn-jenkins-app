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
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm ci
                    npm run build
                    ls -la
                    docker image inspect node:18-alpine
                '''
            }
        }
    }
}