import React from 'react'
import { Timeline } from 'fannypack'
import { markdown } from 'markdown'

const events = [
  {
    datetime: '01 July 2020 23:59:00 GMT+10',
    details:
      'Currently stage 3 restrictions are in effect in the following postcodes 3012, 3021, 3032, 3038, 3042, 3046, 3047, 3055, 3060, and 3064. This map is meant to be used as a visual aid representing the offical data found on the [website](https://www.dhhs.vic.gov.au/restrictions-restricted-postcodes-covid-19) for the Victorian Health and Human Services Department.',
  },
  {
    datetime: '04 July 2020 23:59:00',
    details: `Two additional postcodes are now in stage 3 restrictions 3031, and 3051. Additionally some public housing estates have been placed in total lockdown. There addresses are:
    
- 12 Holland Court, Flemington
- 120 Racecourse Road, Flemington
- 126 Racecourse Road, Flemington
- 130 Racecourse Road, Flemington
- 12 Sutton Street, North Melbourne
- 33 Alfred Street, North Melbourne
- 159 Melrose Street, North Melbourne
- 9 Pampas Street, North Melbourne
- 76 Canning Street, North Melbourne`,
  },
  {
    datetime: '06 July 2020 23:59:00',
    details:
      'New South Wales border closed to metropolitan Melbourne residents.',
  },
  {
    datetime: '07 July 2020 23:59:00',
    details: 'New South Wales border closed.',
  },
]

function getActiveStep(): string {
  const currentDate = Date.now()
  let activeStep: Date

  events.forEach((event) => {
    const eventDate = new Date(event.datetime)
    if (currentDate >= eventDate.getTime()) {
      activeStep = eventDate
    }
  })

  return `${activeStep.getTime()}`
}

const EventTimeline = (): JSX.Element => {
  const options1 = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const dtf = Intl.DateTimeFormat('en-AU', options1)
  return (
    <Timeline activeStep={getActiveStep()} progressColor="success">
      {events.map((event) => {
        const d = new Date(event.datetime)
        return (
          <Timeline.Step
            key={d.getTime()}
            a11yTitleId={`${d.getTime()}`}
            a11yDescriptionId={`${d.getTime()}`}
          >
            <Timeline.StepHeading id={`${d.getTime()}`}>
              {dtf.format(d)}
            </Timeline.StepHeading>
            <Timeline.StepDetail id={`${d.getTime()}`}>
              <div
                dangerouslySetInnerHTML={{
                  __html: markdown.toHTML(event.details),
                }}
              />
            </Timeline.StepDetail>
          </Timeline.Step>
        )
      })}
    </Timeline>
  )
}

export default EventTimeline
