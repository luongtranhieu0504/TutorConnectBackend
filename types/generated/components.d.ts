import type { Schema, Struct } from '@strapi/strapi';

export interface AwardCertification extends Struct.ComponentSchema {
  collectionName: 'components_award_certifications';
  info: {
    displayName: 'Certification';
    icon: 'crown';
  };
  attributes: {
    file: Schema.Attribute.Media;
    issuedAt: Schema.Attribute.Date;
    title: Schema.Attribute.String;
  };
}

export interface ScheduleSlot extends Struct.ComponentSchema {
  collectionName: 'components_schedule_slot';
  info: {
    description: 'Time slot in a schedule';
    displayName: 'Slot';
    icon: 'calendar';
  };
  attributes: {
    end_time: Schema.Attribute.Time & Schema.Attribute.Required;
    start_time: Schema.Attribute.Time & Schema.Attribute.Required;
    weekday: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'award.certification': AwardCertification;
      'schedule.slot': ScheduleSlot;
    }
  }
}
