plugins {
    id("java")
    id("io.freefair.lombok") version "8.11"
}

group = "com.programacion.distribuida"
version = "unspecified"

repositories {
    mavenCentral()
}

var helidonVersion = "4.1.6"

java {
    sourceCompatibility = JavaVersion.VERSION_21
    targetCompatibility = JavaVersion.VERSION_21
}

dependencies {
    // Helidon
    implementation(enforcedPlatform("io.helidon:helidon-dependencies:${helidonVersion}"))
    implementation("io.helidon.microprofile.bundles:helidon-microprofile")
    implementation("org.glassfish.jersey.media:jersey-media-json-binding")

    runtimeOnly("io.smallrye:jandex")
    runtimeOnly("jakarta.activation:jakarta.activation-api")

    // CDI - hikari
    implementation("io.helidon.integrations.cdi:helidon-integrations-cdi-datasource-hikaricp")

    // POSTGRES
    implementation("io.helidon.integrations.db:h2")
    implementation("org.postgresql:postgresql:42.7.4")

    // JPA
    implementation("jakarta.persistence:jakarta.persistence-api")
    implementation("io.helidon.integrations.cdi:helidon-integrations-cdi-jpa")

    // Health
    implementation("io.helidon.microprofile.bundles:helidon-microprofile-core")
    implementation("io.helidon.microprofile.health:helidon-microprofile-health")

    // RestClient
    implementation("io.helidon.microprofile.rest-client:helidon-microprofile-rest-client")

    // Metrics
    implementation("io.helidon.microprofile.metrics:helidon-microprofile-metrics")

    // OPENAPI
    implementation("io.helidon.microprofile.openapi:helidon-microprofile-openapi")
}

tasks.withType<JavaCompile> {
    options.encoding = "UTF-8"
    options.compilerArgs.add("-parameters")
}

tasks.register<Copy>("copyLibs") {
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    from(configurations.runtimeClasspath)
    into("build/libs/libs")
}

tasks.named("assemble") {
    dependsOn("copyLibs")
}

tasks.named<Jar>("jar") {
    manifest {
        attributes(
            "Main-Class" to "io.helidon.microprofile.cdi.Main",
            "Class-Path" to configurations.runtimeClasspath.get().files.joinToString(" ") { "libs/${it.name}" }
        )
    }
}