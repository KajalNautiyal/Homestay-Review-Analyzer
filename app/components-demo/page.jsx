"use client";

import { Button, Input, Loader, Toast, Modal } from "../components/ui";

export default function ComponentsDemo() {
  return (
    <div className="min-h-screen p-10 space-y-8">
      <h1 className="text-4xl font-bold">
        Component Library Demo
      </h1>

      <div>
        <h2 className="font-semibold mb-2">Button</h2>
        <Button text="Click Me" />
      </div>

      <div>
        <h2 className="font-semibold mb-2">Input</h2>
        <Input placeholder="Enter your name" />
      </div>

      <div>
        <h2 className="font-semibold mb-2">Loader</h2>
        <Loader />
      </div>

      <div>
        <h2 className="font-semibold mb-2">Toast</h2>
        <Toast message="Successfully Added!" />
      </div>

      <div>
        <h2 className="font-semibold mb-2">Modal</h2>
        <Modal title="Demo Modal" />
      </div>
    </div>
  );
}