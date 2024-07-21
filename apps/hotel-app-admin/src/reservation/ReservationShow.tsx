import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RESERVATION_TITLE_FIELD } from "./ReservationTitle";

export const ReservationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="guestId" source="guestId" />
        <TextField label="hotelId" source="hotelId" />
        <TextField label="roomId" source="roomId" />
        <TextField label="checkInDate" source="checkInDate" />
        <TextField label="checkOutDate" source="checkOutDate" />
        <TextField label="numberOfGuests" source="numberOfGuests" />
        <TextField label="reservationStatus" source="reservationStatus" />
        <TextField label="totalPrice" source="totalPrice" />
        <TextField label="paymentStatus" source="paymentStatus" />
        <TextField label="bookingDate" source="bookingDate" />
        <TextField label="specialRequests" source="specialRequests" />
        <TextField label="confirmationNumber" source="confirmationNumber" />
        <TextField label="cancellationDate" source="cancellationDate" />
        <TextField label="cancellationReason" source="cancellationReason" />
        <TextField label="roomTypeId" source="roomTypeId" />
        <TextField label="additionalServices" source="additionalServices" />
        <BooleanField label="isPaid" source="isPaid" />
        <TextField label="lastModified" source="lastModified" />
        <ReferenceManyField
          reference="Guest"
          target="reservationId"
          label="Guests"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="lastName" source="lastName" />
            <TextField label="email" source="email" />
            <TextField label="firstName" source="firstName" />
            <TextField label="phoneNumber" source="phoneNumber" />
            <ReferenceField
              label="reservation"
              source="reservation.id"
              reference="Reservation"
            >
              <TextField source={RESERVATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
