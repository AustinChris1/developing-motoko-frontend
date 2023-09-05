import Blob "mo:base/Blob";
import Int "mo:base/Int";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Nat "mo:base/Nat";
import Result "mo:base/Result";
import Hash "mo:base/Hash";

actor {

  type Details = {
    name : Text;
    age : Int;
    image : Blob;
    dob : Int;
    owner : Principal;

  };
  var userID : Nat = 0;
  let users = HashMap.HashMap<Nat, Details>(0, Nat.equal, Hash.hash);

  public query ({ caller }) func me() : async Principal {
    return caller;
  };

  public shared ({ caller }) func create(details : Details) : async Result.Result<Text, Text> {
    if (Principal.isAnonymous(caller)) {
      userID += 1;

      let userDetails : Details = {
        name = details.name;
        age = details.age;
        image = details.image;
        dob = details.dob;
        owner = caller;
      };

      users.put(userID, userDetails);
      return #ok("Registration successful");
    } else {
      return #err("Error");
    };
  };

  public query func viewUsers(id : Nat) : async Result.Result<Details, Text> {

    switch (users.get(id)) {
      case (?user) {
        return #ok(user);
      };
      case (null) {
        return #err("No users");
      };
    };

  };

  public shared ({ caller }) func update(id : Nat, d : Details) : async Result.Result<Text, Text> {
    switch (users.get(id)) {
      case (?user) {
        let userDetails = {
          name = d.name;
          age = d.age;
          image = d.image;
          dob = d.dob;
          owner = caller;
        };
        users.put(id, userDetails);
        var okText : Text = "The user with ID " # Nat.toText(id) # " has been updated.";
        return #ok(okText);
      };
      case (null) {
        return #err("No users");
      };
    };

  };

  public shared ({ caller }) func delete(id : Nat) : async Result.Result<Details, Text> {

    switch (users.get(id)) {
      case (?user) {
        users.delete(id);
        return #ok(user);
      };
      case (null) {
        return #err("No users");
      };
    };

  };

};
