package com.hcl.Atom.Service;

//public class EmpServices {

//}

import java.util.List;

import org.springframework.stereotype.Service;
import com.hcl.Atom.Model.Employee;
@Service
public interface EmpServices
{
public Employee find(int id);
public List<Employee> findAll();
public void save(Employee stock);
public void delete(int id);
public void update(Employee stock);
}



