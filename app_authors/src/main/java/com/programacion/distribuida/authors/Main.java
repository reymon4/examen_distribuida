package com.programacion.distribuida.authors;

import io.helidon.microprofile.server.Server;
import jakarta.ws.rs.core.Application;

public class Main extends Application {
    public static void main(String[] args) {
        Server server = Server.create().start();
        System.out.println("Server started at: http://localhost:" + server.port());
    }
}
