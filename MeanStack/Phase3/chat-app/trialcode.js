const conversationItemHtml = (uid, currdate, msg, isActive, cid) => {
  return ` <div class="chat_list ${
    isActive ? `active_chat` : `notactive_chat`
  }" onclick=getConvMessages(this,event,"${cid}",${isActive})>
  <div class="chat_people">
    <div class="chat_img">
      <img
        src="https://ptetutorials.com/images/user-profile.png"
        alt="sunil"
      />
    </div>
    <div class="chat_ib">
      <h5>
        ${uid} <span class="chat_date">${currdate}</span>
      </h5>
      <p>
        ${msg}
      </p>
    </div>
  </div>
  </div>`;
};

const getConvMessages = async (el, event, id, active) => {
  const chatList = document.querySelectorAll(".inbox_chat > .chat_list");
  Array.from(chatList).forEach((e) => {
    if (e.classList.contains("active_chat")) {
      e.classList.remove("active_chat");
      e.classList.add("notactive_chat");
    }
  });
  el.classList.remove("notactive_chat");
  el.classList.add("active_chat");
  event.stopPropagation();
  chatList.forE;
  let pastModifiedMessages = [];
  pastMessages = [];
  removeAllChildNodes(msgHistory);
  await getMessagesByConversationId(id);
  pastModifiedMessages = pastMessages.map((message) => {
    let msgHtml = "";
    if (message.chatFlow === "outgoing") {
      msgHtml = incomingMsgHtml(
        message.chatContent,
        convertDateUtcFormatChat(message.timeCreated)
      );
    }
    if (message.chatFlow === "incoming") {
      msgHtml = outgoingMsgHtml(
        message.chatContent,
        convertDateUtcFormatChat(message.timeCreated)
      );
    }
    return msgHtml;
  });
  msgHistory.insertAdjacentHTML("beforeend", pastModifiedMessages.join(""));
  if (!active) {
    typeChat.style.display = "none";
  } else {
    scrolled = false;
    updateScroll();
    typeChat.style.display = "block";
  }
};
