import { firestoreDatabase } from '@/firebase/config'
import { QueryFieldFilterConstraint, collection, getDocs, query, where } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    console.log(req.query)

    const queries: Array<QueryFieldFilterConstraint> = []
    for (const key in req.query) {
        if (key === 'equipment' || key === 'secondaryMuscleGroups') {
            queries.push(where(key, 'array-contains', req.query[key]))
            continue
        }
        queries.push(where(key, '==', req.query[key]))
    }

    const exercisesRef = collection(firestoreDatabase, 'exercises')
    const exercisesQuery = query(exercisesRef, ...queries)
    const exercisesSnap = await getDocs(exercisesQuery)

    res.status(200).json({ query: req.query, exercisesSnap: exercisesSnap.docs.map(doc => doc.data()) })
}
