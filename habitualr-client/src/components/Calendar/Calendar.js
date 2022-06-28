import React from "react";
import "./Calendar.scss";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";

export default class Calendar extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
    isHabitDone: false,
  };

  toggleComplete = () => {
    this.setState({
      isHabitDone: !this.state.isHabitDone,
    });
  };

  //   onClick={this.toggleComplete}

  render() {
    return (
      <div className="demo-app">
        {this.renderSidebar()}
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek",
            }}
            initialView="dayGridMonth"
            events={[
              { title: "eve1", date: "2022-04-15" },
              { title: "eve2", date: "2022-04-10" },
            ]}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            // select={this.handleDateSelect}
            select={this.dateClick}
            // eventContent={renderEventContent} // custom render function
            // eventClick={this.dateClick}
            // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>
    );
  }

  renderSidebar() {
    return (
      <div className="demo-app-sidebar">
        <div className="demo-app-sidebar-section">
          {/* <h2>Time to Track your Habit for this month!</h2> */}
          {/* <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul> */}
        </div>
        {/* <div className="demo-app-sidebar-section">
          <label>
            <input
              type="checkbox"
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div> */}
        {/* <div className="demo-app-sidebar-section">
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>{this.state.currentEvents.map(renderSidebarEvent)}</ul>
        </div> */}
      </div>
    );
  }
  dateClick = function (info) {
    // change the day's background color just for fun
    console.log(info);
    info.jsEvent.target.style.backgroundColor = "lightgreen";
  };

  //   handleWeekendsToggle = () => {
  //     this.setState({
  //       weekendsVisible: !this.state.weekendsVisible,
  //     });
  //   };

  //   handleDateSelect = (selectInfo) => {
  //     // let title = prompt("Please enter a new title for your event");
  //     let calendarApi = selectInfo.view.calendar;

  //     calendarApi.unselect(); // clear date selection

  //     if (title) {
  //       calendarApi.addEvent({
  //         id: createEventId(),
  //         title,
  //         start: selectInfo.startStr,
  //         end: selectInfo.endStr,
  //         allDay: selectInfo.allDay,
  //       });
  //     }
  //   };

  handleEventClick = (clickInfo) => {
    if (
      window
        .confirm
        // `Are you sure you want to delete the event '${clickInfo.event.title}'`
        ()
    ) {
      clickInfo.event.remove();
    }
  };

  handleEvents = (events) => {
    this.setState({
      currentEvents: events,
    });
  };
}

function renderEventContent(eventInfo) {
  return (
    <>
      {/* <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i> */}
    </>
  );
}

// function renderSidebarEvent(event) {
//   return (
//     <li key={event.id}>
//       <b>
//         {formatDate(event.start, {
//           year: "numeric",
//           month: "short",
//           day: "numeric",
//         })}
//       </b>
//       {/* <i>{event.title}</i> */}
//     </li>
//   );
// }
