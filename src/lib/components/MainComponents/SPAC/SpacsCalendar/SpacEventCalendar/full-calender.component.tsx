import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const events = [{ title: "Meeting", start: new Date(), end: new Date() }];

interface PROPS {
  data: any;
}

const FullCalendarComponet: React.FC<PROPS> = () => {
  const renderEventContent = (eventInfo: any) => {
    return (
      <>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <b>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
        </div>
      </>
    );
  };
  return (
    <section>
      <h1>Full Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        // datesSet={changeHandlerDate} // call when we change on header
        initialView="dayGridMonth"
        events={events}
        eventContent={renderEventContent} // this function print data
        // selectable={true}
        showNonCurrentDates={false}
        allDaySlot={false}
        // height="100vh"
        dayMaxEventRows={5}
      />
    </section>
  );
};
export default FullCalendarComponet;
