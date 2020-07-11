interface Event {
  startDate: Date
  endDate: Date
  locationType: LocationType
  location: string
  details: string
  stage: LockdownStage
}

enum LocationType {
  latlng = 'LATLNG',
  address = 'ADDRESS',
  lga = 'LGA',
  postcode = 'POSTCODE',
}

enum LockdownStage {
  stage1 = 'STAGE1',
  stage2 = 'STAGE2',
  stage3 = 'STAGE3',
  stage4 = 'STAGE4',
}
