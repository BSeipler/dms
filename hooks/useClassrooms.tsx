import { useQuery } from "@tanstack/react-query";
import { supabase } from "../utils/supabaseClient";
import { PostgrestResponse } from "@supabase/supabase-js";
import { Classroom } from "../types";

const useClassrooms = () => {
  const fetchClassrooms = async (): Promise<PostgrestResponse<Classroom>> => {
    const response = await supabase.from<Classroom>("classrooms").select();
    if (response.error) {
      console.log(response.error.message);
    }
    return response;
  };

  return useQuery(["classrooms"], fetchClassrooms);
};

export default useClassrooms;
