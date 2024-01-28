import React from "react";
import { useParams } from "react-router-dom";

export default function UserParams() {
  const {stuff} = useParams();
  return <div>Parameters: {stuff}</div>;
}
