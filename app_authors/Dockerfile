# docker build -t app_authors_examen .
# docker build -t docker.io/reymon4/app_authors_examen .
# docker push reymon4/app_authors_examen

FROM eclipse-temurin:21.0.5_11-jre-alpine
RUN mkdir /app
WORKDIR /app

COPY build/libs/app_authors_gradle.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]