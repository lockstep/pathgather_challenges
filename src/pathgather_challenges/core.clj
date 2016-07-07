(ns pathgather-challenges.core
  (:require [clj-http.client :as client]
            [clojure.data.json :as json]
            [clojure.string :as string]))

(def fields ["name" "description" "slug" "startDate"])

(defn fetch-courses [start limit fields]
  (let [response (client/get "https://api.coursera.org/api/courses.v1"
                             {:query-params {:start  start
                                             :limit  limit
                                             :fields (string/join "," fields)}})]
    (get (json/read-str (:body response)) "elements")))

(defn fetch-all-courses
  ([] (fetch-all-courses 0 100 fields []))
  ([start limit fields acc]
   (let [courses (fetch-courses start limit fields)]
     (if (empty? courses)
       acc
       (fetch-all-courses (+ start limit) limit fields (into acc courses))))))
