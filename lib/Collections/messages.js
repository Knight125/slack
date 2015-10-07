/**
 * Created by Kara on 10/7/2015.
 */
Messages = new Mongo.Collection("messages");
Messages.insert({greeting: "hello"}, function() {});

