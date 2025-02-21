package com.programacion.distribuida.authors.rest;


import com.programacion.distribuida.authors.db.Author;
import jakarta.validation.Valid;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

//@RegisterRestClient(baseUri="http:localhost:8088/authors")
public interface IAuthorRest {


    @GET
    public Response findAll();

    @GET
    @Path("/{id}")
    public Response findById(@PathParam("id") Integer id);

    @PUT
    @Path("/{id}")
    public Response update(@PathParam("id") Integer id,@Valid Author author);
    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") Integer id);

    @POST
    public Response create(@Valid Author author);
}
