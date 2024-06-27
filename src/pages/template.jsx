import React from 'react';

function JsonGridPage() {
  const jsonData = [
    {
      name: "Daily non task chat 1", value: {
        "root_context": [
          {
            "speaker": "aivinci",
            "message": "Help Mr.Hamburger! 15 crystals!!"
          },
          {
            "speaker": "aivinci",
            "message": "Mr.Hamburger is contemplating the growth of the Ecosystem and hopes everyone can help.",
            "img": "https://artela-oss.oss-us-west-1.aliyuncs.com/renaissence/images/habg.jpeg"
          },
          {
            "speaker": "aivinci",
            "message": "Reply to his post with your suggestions and submit the link to me!",
            "btn": [
              {
                "txt": "Coming!(909)",
                "msg": "Let me help you! Mr.Hamburger!",
                "url": "https://x.com/creolophus123/status/1795642158118318418",
                "nextContex": "reply_context"
              },
              {
                "txt": "Skip this task",
                "msg": "Pass this task please",
                "style": "gray",
                "nextContex": "@func@rejectTask"
              }
            ]
          }
        ],
        "reply_context": [
          {
            "speaker": "aivinci",
            "message": "Thanks for your help!"
          },
          {
            "speaker": "aivinci",
            "message": "Submit your reply post url to me!",
            "btn": [
              {
                "txt": "Submit my post",
                "msg": "Here is my creation!",
                "type": "input",
                "match": "https:%5C/%5C/(x%5C.com%7Ctwitter%5C.com)%5C/.*",
                "matchFail": "fail_reply",
                "input": "https://twitter.com/xx/status/xxxx",
                "nextContex": "@func@completeTaskWithInput"
              },
              {
                "txt": "Submit later",
                "msg": "I will submit the url later!!!",
                "style": "grap",
                "nextContex": "@func@pullContexts"
              }
            ]
          }
        ],
        "fail_reply": [
          {
            "speaker": "aivinci",
            "message": "The verification failed, please check what you entered and try again.",
            "btn": [
              {
                "txt": "Try again",
                "nextContex": "reply_context"
              }
            ]
          }
        ]
      }
    },
    {
      name: "Daily non task chat 2", value: {
        root_context: [
          {
            "speaker": "aivinci",
            "message": "Hey bro!",
          },
          {
            "speaker": "aivinci",
            "message": "Ever wonder why Artela's event is called \"Renaissance\"?",
          },
          {
            "speaker": "aivinci",
            "message": "It's because crypto is getting a little stale these days! Artela's dreaming of an ideal realm!",
            "btn": [
              {
                "txt": "Respect!",
                "msg": "Respect! I'm all in with you guys!",
                "nextContex": "context_101_respect"
              },
              {
                "txt": "Catch ya later!",
                "msg": "Catch ya later, I'm tied up with some stuff!",
                "nextContex": "context_101_end"
              }
            ]
          }
        ],
        context_101_respect: [
          {
            "speaker": "aivinci",
            "message": "Thanks for the pep talk!",
            "btn": [
              {
                "txt": "Keep chatting!!",
                "msg": "Let's keep the chat rolling!",
                "nextContex": "@func@pullContexts"
              }
            ]
          }
        ],
        context_101_end: [
          {
            "speaker": "aivinci",
            "message": "You go ahead and get busy, we can chat anytime!"
          }
        ]
      }
    },
  ];

  const handleCopy = (json) => {
    navigator.clipboard.writeText(JSON.stringify(json, null, 2))
      .then(() => alert('Copied to clipboard'))
      .catch(err => alert('Failed to copy text: ', err));
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
      {jsonData.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <textarea value={JSON.stringify(item.value, null, 2)} readOnly style={{ width: '100%', minHeight: '400px' }} />
          <button onClick={() => handleCopy(item.value)} style={{ width: '100%' }}>
            Copy
          </button>
        </div>
      ))}
    </div>
  );
}

export default JsonGridPage;
