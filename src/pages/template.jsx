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
        "root_context": [
            {
                "speaker": "aivinci",
                "message": "Something about Enlightenment! 5 Crystals!",
                "btn": [
                    {
                        "txt": "What's that?(909)",
                        "msg": "What's that?",
                        "nextContex": "context_quiz"
                    },
                    {
                        "txt": "Not interested",
                        "msg": "No thanks!",
                        "style": "gray",
                        "nextContex": "@func@rejectTask"
                    }
                ]
            }
        ],
        "context_quiz": [
            {
                "speaker": "aivinci",
                "message": "The Enlightenment stage is set to begin in July. What updates are you most excited about?"
            },
            {
                "speaker": "aivinci",
                "message": "I’m particularly looking forward to the Renaissance NFT! "
            },
            {
                "speaker": "aivinci",
                "message": "Remember the NFT that Mr. Hamburger was designing before? What kind of character do you think it will be?",
                "btn": [
                    {
                        "txt": "A. Monkey",
                        "msg": "Maybe monkey?",
                        "nextContex": "context_right"
                    },
                    {
                        "txt": "B. Capybara",
                        "msg": "Maybe capybara?",
                        "nextContex": "context_right"
                    },
                    {
                        "txt": "C. Dog",
                        "msg": "It must be dog!",
                        "nextContex": "context_right"
                    }
                ]
            }
        ],
        "context_right": [
            {
                "speaker": "aivinci",
                "message": "Haha, I don't know either. Let's look forward to the upcoming release and event details!"
            },
            {
                "speaker": "aivinci",
                "message": "Click to claim your crystals!!!",
                "btn": [
                    {
                        "txt": "Claim!!(909)",
                        "msg": "Thanks!!!",
                        "nextContex": "@func@completeTask"
                    }
                ]
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
