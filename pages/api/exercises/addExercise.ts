import { firestoreDatabase } from '@/firebase/config'
import { collection, doc, setDoc } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'

const exercises: IExercise[] = [
    {
        "name": "Balance Trainer Push Up",
        "description": "1. Place your hands on the outer edges of the balance trainer with your arms extended and your body in a straight line from head to heels. 2. Lower your body until your chest touches the balance trainer. 3. Push back up to the starting position. 4. Repeat for the desired number of repetitions. ",
        "primaryMuscleGroup": "Chest",
        "secondaryMuscleGroups": [
            "Triceps",
            "Shoulders"
        ],
        "equipment": [
            "Balance Trainer"
        ]
    },
    {
        "name": "Balance Trainer Incline Push Up",
        "description": "1. Place your hands on the balance trainer with your arms extended and your body at an angle. 2. Lower your body until your chest touches the balance trainer. 3. Push back up to the starting position. 4. Repeat for the desired number of repetitions. ",
        "primaryMuscleGroup": "Upper Chest",
        "secondaryMuscleGroups": [
            "Triceps",
            "Shoulders"
        ],
        "equipment": [
            "Balance Trainer"
        ]
    },
    {
        "name": "Balance Trainer Tricep Push Up",
        "description": "1. Place your hands close together on the balance trainer with your arms extended and your body in a straight line from head to heels. 2. Lower your body until your chest touches the balance trainer. 3. Push back up to the starting position. 4. Repeat for the desired number of repetitions. ",
        "primaryMuscleGroup": "Triceps",
        "secondaryMuscleGroups": [
            "Chest",
            "Shoulders"
        ],
        "equipment": [
            "Balance Trainer"
        ]
    },
    {
        "name": "Balance Trainer Decline Push Up",
        "description": "1. Place your feet on the balance trainer and your hands on the floor with your arms extended and your body in a straight line from head to heels. 2. Lower your body until your chest touches the floor. 3. Push back up to the starting position. 4. Repeat for the desired number of repetitions. ",
        "primaryMuscleGroup": "Lower Chest",
        "secondaryMuscleGroups": [
            "Triceps",
            "Shoulders"
        ],
        "equipment": [
            "Balance Trainer"
        ]
    }
]


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const exercisesRef = collection(firestoreDatabase, 'exercises')

    exercises.forEach(async exercise => {
        await setDoc(doc(exercisesRef), exercise)
    })

    res.status(200).json({
        message: `${exercises.length} exercises added.`,
        exercises: exercises.map(exercise => exercise.name)
    })

    // res.status(200).json(exercisesSnap.docs.map(doc => doc.data() as IExercise))
}