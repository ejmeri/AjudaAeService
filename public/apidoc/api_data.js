define({ "api": [
  {
    "group": "Error",
    "error": {
      "examples": [
        {
          "title": "Error:",
          "content": "HTTP/1.1 400 Forbidden\n{\n  \"error\": \"Message error\",\n   \"status\": false\n}",
          "type": "json"
        }
      ]
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Error",
    "name": ""
  },
  {
    "type": "post",
    "url": "/profile",
    "title": "",
    "group": "Profile",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do perfil do usuário</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>Data de nascimento do perfil (user).</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status do perfil.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id do usuário pertencente ao perfil.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n        \"profile\": {\n            \"id\": 1,\n            \"name\": \"Elmeri EJOTA\",\n            \"birthday\": '27/08/1997',\n            \"status\": \"1\",\n            \"user_id\": \"2\",\n            \"created_at\": \"2018-04-28T01:37:37.000Z\",\n            \"updated_at\": \"2018-04-28T02:45:21.430Z\"\n        },\n        \"status\": true,\n        \"description\": \"Profile save.\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profile",
    "name": "PostProfile"
  },
  {
    "type": "get",
    "url": "/",
    "title": "API Status",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de status da TESTE</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\"status\": \"NTask API\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Status",
    "name": "Get"
  },
  {
    "type": "post",
    "url": "/skillprofile",
    "title": "",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de status da TESTE</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\"status\": \"AjudaAe API\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Status",
    "name": "PostSkillprofile"
  }
] });
