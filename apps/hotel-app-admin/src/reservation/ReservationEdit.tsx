import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GuestTitle } from "../guest/GuestTitle";

export const ReservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="guestId" source="guestId" />
        <TextInput label="hotelId" source="hotelId" />
        <TextInput label="roomId" source="roomId" />
        <DateTimeInput label="checkInDate" source="checkInDate" />
        <DateTimeInput label="checkOutDate" source="checkOutDate" />
        <TextInput label="numberOfGuests" source="numberOfGuests" />
        <SelectInput
          source="reservationStatus"
          label="reservationStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="totalPrice" source="totalPrice" />
        <SelectInput
          source="paymentStatus"
          label="paymentStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="bookingDate" source="bookingDate" />
        <TextInput label="specialRequests" source="specialRequests" />
        <TextInput label="confirmationNumber" source="confirmationNumber" />
        <DateTimeInput label="cancellationDate" source="cancellationDate" />
        <TextInput label="cancellationReason" source="cancellationReason" />
        <TextInput label="roomTypeId" source="roomTypeId" />
        <TextInput label="additionalServices" source="additionalServices" />
        <BooleanInput label="isPaid" source="isPaid" />
        <TextInput label="lastModified" source="lastModified" />
        <ReferenceArrayInput
          source="guests"
          reference="Guest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GuestTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
