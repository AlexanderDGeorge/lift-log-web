import { firestoreDatabase } from '@/firebase/config'
import { collection, doc, setDoc } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'

const exercises: IExercise[] = [
    {
        "name": "Handle Band Crunch",
        "primaryMuscleGroup": "Abs",
        "secondaryMuscleGroups": ["Obliques"],
        "description": "1. Attach handle band to a stable anchor point and hold it with both hands. 2. Kneel facing away from the anchor point and extend your arms above your head. 3. Tighten your core and bend at the waist, lowering your upper body until your hands are at your knees. 4. Slowly return to the starting position and repeat.",
        "equipment": ["Handle Bands"]
    },
    {
        "name": "Hanging Knee Raise",
        "primaryMuscleGroup": "Abs",
        "secondaryMuscleGroups": ["Hip Flexors"],
        "description": "1. Hang from a pull-up bar with your palms facing away from your body and your feet off the ground. 2. Tighten your core and lift your knees up towards your chest. 3. Hold for a moment, then slowly lower your legs back down to the starting position. 4. Repeat.",
        "equipment": ["Pull Up Bar"]
    },
    {
        "name": "Hanging Leg Raise",
        "primaryMuscleGroup": "Abs",
        "secondaryMuscleGroups": ["Hip Flexors"],
        "description": "1. Hang from a pull-up bar with your palms facing away from your body and your feet off the ground. 2. Tighten your core and lift your legs up until they are parallel to the ground. 3. Hold for a moment, then slowly lower your legs back down to the starting position. 4. Repeat.",
        "equipment": ["Pull Up Bar"]
    },
    {
        "name": "Hanging Oblique Knee Raise",
        "primaryMuscleGroup": "Abs",
        "secondaryMuscleGroups": ["Obliques", "Hip Flexors"],
        "description": "1. Hang from a pull-up bar with your palms facing away from your body and your feet off the ground. 2. Tighten your core and lift your knees up towards your chest, twisting your torso to bring your knees towards your opposite elbow. 3. Hold for a moment, then slowly lower your legs back down to the starting position. 4. Repeat on the other side.",
        "equipment": ["Pull Up Bar"]
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