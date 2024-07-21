import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ReservationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reservations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
