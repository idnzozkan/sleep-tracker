import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { loadEntries } from '../store/actions/entryAction'

const StatsTable = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadEntries())
    }, [])

    const data = [
        {
            date: 'Aug 12 2021',
            sleepTime: '12:00 AM',
            wakeupTime: '05:00 AM',
            duration: 5
        },
        {
            date: 'Aug 11 2021',
            sleepTime: '01:30 AM',
            wakeupTime: '07:00 AM',
            duration: 5.5
        },
        {
            date: 'Aug 10 2021',
            sleepTime: '10:00 PM',
            wakeupTime: '04:00 AM',
            duration: 6
        },
        {
            date: 'Aug 09 2021',
            sleepTime: '02:00 AM',
            wakeupTime: '09:00 AM',
            duration: 7
        },
        {
            date: 'Aug 8 2021',
            sleepTime: '03:00 AM',
            wakeupTime: '09:00 AM',
            duration: 6
        },
        {
            date: 'Aug 7 2021',
            sleepTime: '12:00 AM',
            wakeupTime: '08:00 AM',
            duration: 8
        },
        {
            date: 'Aug 6 2021',
            sleepTime: '11:00 PM',
            wakeupTime: '05:00 AM',
            duration: 6
        }
    ]

    return (
        <Container>
            <h2>Sleep Stats</h2>
            <Table>
                <thead align="left">
                    <th>Date</th>
                    <th>Time of Sleep</th>
                    <th>Wake-up Time</th>
                    <th>Sleep Duration</th>
                </thead>
                <tbody>
                    {data.length ? data.map(entry => (
                        <tr>
                            <td>{entry.date}</td>
                            <td>{entry.sleepTime}</td>
                            <td>{entry.wakeupTime}</td>
                            <td>{entry.duration} Hours</td>
                        </tr>
                    )) : (
                        <tr>
                            No data
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}

const Container = styled.div`
    h2 {
        margin-left: 1rem;
        color: white;
        font-size: 1.62500rem;
        font-weight: 700
    }
`

const Table = styled.table`
    width: 100%;
    border-collapse: separate; 
    border-spacing: 0 1rem;

    th {
        color: white;
        font-size: 1rem;
        font-weight: 400;
        
        &:first-child {
            padding: 0 1rem;
        }
    }

    tr {
        color: #9595C5;
        font-size: 1rem;

        &:hover {
            td {
                background-color: #363654ab;
            }
        }

        td {
            background-color: #363654;
            padding: 1.5rem 1rem;

            &:first-child {
                border-top-left-radius: 24px;
                border-bottom-left-radius: 24px;
            }
            &:last-child {
                border-top-right-radius: 24px;
                border-bottom-right-radius: 24px;
            }        
        }
    }
`

export default StatsTable
