# DynamicReading

Aplicação ainda em desenvolvimento.

## Debug app

Instalar [json-server](https://github.com/typicode/json-server).

Criar arquivo para simular banco de dados: db.json.

### Exemplo de json:
```json
{
  "articles": [
    {
      "id": 1,
      "title": "5 projects for Raspberry Pi at home",
      "url": "https://opensource.com/article/17/4/5-projects-raspberry-pi-home",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum pretium urna, sit amet elementum nisi. Fusce scelerisque, quam sit amet ornare mollis, justo augue pretium metus, eget molestie justo lectus nec quam. Sed feugiat lacus et nibh maximus, quis eleifend nunc lobortis. Pellentesque non risus vel orci suscipit consequat. Integer et tincidunt sem, ut cursus risus. ",
      "index": 0,
      "favorite": true,
      "archive": false,
      "tags": [
        {
          "name": "lorem"
        },
        {
          "name": "ipsum"
        }
      ],
      "source": {
        "id": 1,
        "name": "Pocket"
      }
    },
    {
      "id": 2,
      "title": "HowTo: Set-Up the Raspberry Pi as a Headless Device",
      "favorite": false,
      "archive": false,
      "url": "http://jeffskinnerbox.me/posts/2016/Apr/27/howto-set-up-the-raspberry-pi-as-a-headless-device/",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum pretium urna, sit amet elementum nisi.",
      "index": 0,
      "tags": [
        {
          "name": "article"
        },
        {
          "name": "teste"
        }
      ],
      "source": {
        "id": 2,
        "name": "Evernote"
      }
    }
  ],
  "config": {
    "speedRead": "300"
  }
}
```
