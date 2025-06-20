"use client";

import React from "react";
import Button from "./Button";

export default function RegisterButton() {
    return (
        <Button onClick={() => alert("Inscription réussie")}>
            Inscription
        </Button>
    );
}
