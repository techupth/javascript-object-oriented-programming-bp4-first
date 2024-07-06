class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }

  send() {
    console.log(`Email notification has been sent to ${this.receiver}`);
  }
}

class SMSNotification extends EmailNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    super(notificationId, createdTime, content);
    this.phoneNumber = phoneNumber;
  }

  send() {
    console.log(`SMS notification has been sent to ${this.phoneNumber}`);
  }
}

const email1 = new EmailNotification(
  123,
  "12-12-23",
  `Some email content`,
  `p.suwiriyachaikul@gmail.com`
);
email1.send();

const sms1 = new SMSNotification(
  124,
  "12-12-23",
  `Some SMS content`,
  `1234567890`
);
sms1.send();
