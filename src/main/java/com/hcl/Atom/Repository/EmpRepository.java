package com.hcl.Atom.Repository;

//public class EmpRepository {

//}

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



import com.hcl.Atom.Model.Employee;



@Repository
public interface EmpRepository extends JpaRepository<Employee, Integer> {



}
