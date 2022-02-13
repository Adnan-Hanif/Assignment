# Assignment
Open the POSTMAN 
For Create USER
** paste the URL https://reqres.in/api/users in input field and select POST request and write the following code in body 
*** {
    "name": "Adnan",
    "job": "QA Analyst"
    }
    for Asertion write the following code
    
    pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
    });

    pm.test("Job is QA Analyst", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.job).to.eql('QA Analyst');
    });
    
 For List Single User
 ** paste the URL https://reqres.in/api/users/2 in input field and select GET request and write the following code for Ascertion 
 
 
 ** pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
   });

pm.test("Id is 2", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.id).to.eql(2);
});

var schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "data": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "email": {
          "type": "string"
        },
        "first_name": {
          "type": "string"
        },
        "last_name": {
          "type": "string"
        },
        "avatar": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "email",
        "first_name",
        "last_name",
        "avatar"
      ]
    },
    "support": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string"
        },
        "text": {
          "type": "string"
        }
      },
      "required": [
        "url",
        "text"
      ]
    }
  },
  "required": [
    "data",
    "support"
  ]
}

var json = pm.response.json()
pm.test( " Schema is valid ",function(){
    pm.expect(tv4.validate(json, schema)).to.be.true;
})

I used Jason Schema 

for update User
paste the URL https://reqres.in/api/users/2 in input field and following code in Body 
** {
    "name": "morpheus",
    "job": "QA Analyst"
 }
 
 write the following code in Test area
 
 ** pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Job is QA Analyst", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.job).to.eql('QA Analyst');
});
