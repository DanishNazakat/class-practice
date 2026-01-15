const chatBox = document.getElementById("chat-box");

const API_KEY =  "";

function addMessage(text, className) {
  const div = document.createElement("div");
  div.className = "message " + className;
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  addMessage("You: " + message, "user");
  input.value = "";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();
    addMessage("AI: " + data.choices[0].message.content, "bot");

  } catch (err) {
    addMessage("Error: API not working", "bot");
  }
}
