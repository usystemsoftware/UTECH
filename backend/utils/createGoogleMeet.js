import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

oauth2Client.setCredentials({
  access_token: process.env.GOOGLE_ACCESS_TOKEN,
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: "v3", auth: oauth2Client });

export async function createGoogleMeet(name, email, date, slot) {
  // Example: date = "2025-08-28", slot = "6:00 PM"

  const start = new Date(`${date} ${slot} GMT+0530`); // IST
  if (isNaN(start)) {
    throw new Error(`Invalid datetime: ${date} ${slot}`);
  }

  const end = new Date(start.getTime() + 60 * 60 * 1000); // 1 hour

  const event = {
    summary: `Meeting with ${name}`,
    description: `Slot Booking for ${name}`,
    start: { dateTime: start.toISOString(), timeZone: "Asia/Kolkata" },
    end: { dateTime: end.toISOString(), timeZone: "Asia/Kolkata" },
    attendees: [{ email }],
    conferenceData: {
      createRequest: {
        requestId: `meet-${Date.now()}`,
        conferenceSolutionKey: { type: "hangoutsMeet" },
      },
    },
  };

  const response = await calendar.events.insert({
    calendarId: "primary",
    resource: event,
    conferenceDataVersion: 1,
  });

  return response.data.hangoutLink;
}
