import { useContext } from "react";
import { formatDistanceToNow } from "date-fns";

import { CyclesContext } from "../../context/CyclesContext";
import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  const { cycles } = useContext(CyclesContext);
  const hasCycles = cycles?.length > 0;

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      {hasCycles ? (
        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Duration</th>
                <th>Starts In</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cycles.map((cycle) => {
                return (
                  <tr key={cycle.id}>
                    <td>{cycle.task}</td>
                    <td>{cycle.minutesAmount} min</td>
                    <td>
                      {formatDistanceToNow(new Date(cycle.startDate), {
                        addSuffix: true,
                      })}
                    </td>
                    <td>
                      {cycle.finishedDate && (
                        <Status statusColor="green">Finished</Status>
                      )}
                      {cycle.interruptedDate && (
                        <Status statusColor="red">Canceled</Status>
                      )}
                      {!cycle.finishedDate && !cycle.interruptedDate && (
                        <Status statusColor="yellow">In Progress</Status>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </HistoryList>
      ) : (
        <p> No cycles started</p>
      )}
    </HistoryContainer>
  );
}
