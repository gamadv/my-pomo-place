import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../context/CyclesContext";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";


export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I'm work on it:</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Which's Project?"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="Project 1" />
        <option value="Project 2" />
        <option value="Project 3" />
        <option value="Get Rich" />
      </datalist>

      <label htmlFor="minutesAmount">while</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        min={5}
        max={60}
        step={5}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  );
}
