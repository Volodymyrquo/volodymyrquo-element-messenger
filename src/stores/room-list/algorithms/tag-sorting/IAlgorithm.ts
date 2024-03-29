/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { Room } from "matrix-js-sdk/src/models/room";
import { TagID } from "matrix-react-sdk/src/stores/room-list/models";

/**
 * Represents a tag sorting algorithm.
 */
export interface IAlgorithm {
    /**
     * Sorts the given rooms according to the sorting rules of the algorithm.
     * @param {Room[]} rooms The rooms to sort.
     * @param {TagID} tagId The tag ID in which the rooms are being sorted.
     * @returns {Promise<Room[]>} Resolves to the sorted rooms.
     */
    sortRooms(rooms: Room[], tagId: TagID): Promise<Room[]>;
}
