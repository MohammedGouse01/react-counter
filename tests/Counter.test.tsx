import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CounterComponent from './../src/assets/components/CounterComponent';
import '@testing-library/jest-dom';

describe("CounterComponent", () => {
  it("should render with initial count of 0", () => {
    render(<CounterComponent />);
    expect(screen.getByText(/Current Count : 0/i)).toBeInTheDocument();
  });

  it("should increment the count when Increment button is clicked", () => {
    render(<CounterComponent />);
    const incrementButton = screen.getByText(/Increment/i);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Current Count : 1/i)).toBeInTheDocument();
  });

  it("should decrement the count when Decrement button is clicked", () => {
    render(<CounterComponent />);
    const incrementButton = screen.getByText(/Increment/i);
    const decrementButton = screen.getByText(/Decrement/i);

    // Increment first to ensure the count is greater than 0
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Current Count : 1/i)).toBeInTheDocument();

    // Decrement back to 0
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Current Count : 0/i)).toBeInTheDocument();
  });

  it("should not decrement the count below 0", () => {
    render(<CounterComponent />);
    const decrementButton = screen.getByText(/Decrement/i);
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Current Count : 0/i)).toBeInTheDocument();
  });
});
