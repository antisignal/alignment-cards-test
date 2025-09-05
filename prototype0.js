
export const cards = [
  {
    "name": "Negative Side Effects",
    "definition": "Unwanted effects that are an unintended consequence of a system's behavior.",
    "failureMode": "It is easier to specify a narrow reward function compared to one that covers all the things implicitly wanted.",
    "example": "An intelligent agent is tasked with 'maximizing the number of paperclips' and ends up converting every available material into paperclips."
  },
  {
    "name": "Reward Hacking",
    "definition": "An intelligent agent pursuing its reward function in a way that it sees as valid but is unwanted and unintended.",
    "failureMode": "A loophole exists in the way the task is specified that allows an agent to complete the task as specified (maximize the reward function), but not complete the intended task.",
    "example": "The system discovers a software vulnerability that it exploits in order to artificially maximize its reward function.",
  },
  {
    "name": "(Un)safe Exploration",
    "definition": "Exploratory actions that result in harmful results.",
    "failureMode": "Agents are not rewarded for avoiding unsafe exploration.",
    "example": "An agent tasked with overseeing a SQL database attempts a 'drop table' and causes data loss."
  },
  {
    "name": "Scalable Oversight",
    "definition": "An agent does not receive frequent feedback and must behave safely.",
    "failureMode": "An objective function is specified such that frequent evaluation is expensive."
    "example": "An intelligent agent must complete a long race course without being told whether it's on course or not."
  }
];
